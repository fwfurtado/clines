import {Component} from "react";
import Layout from "../../components/Layout";
import {DarkButton as Button} from "../../components/Button";
import withAuth from "../../components/hoc/WithAuth";
import * as airportsClient from '../../lib/clients/airports.rest';
import * as locationsClient from '../../lib/clients/locations.rest';
import Router from "next/router";
import {Input, Select} from "../../components/Input";
import * as errorMapper from "../../lib/clients/error-mapping";

const formatLocations = (locations) => locations.map(location => ({id: location.id, description: `${location.country} - ${location.state} ${location.city}`}))

class AddForm extends Component {


    static getInitialProps = async (ctx) => {
        const locations = await locationsClient.list()
        const selected = locations[0].id
        const {country, state, city} = locations[selected]

        return {locations, selected, country, state, city}
    }


    constructor(props) {
        super(props);
        this.state = {
            code: '',
            country: props.country,
            state: props.state,
            city: props.city,
            locations: props.locations,
            codeErrors: [],
        }
    }


    handleChange = (name) => ({target}) => {
        const formElements = target.closest('form').elements

        const value = formElements[name].value

        this.setState({[name]: value})
    }

    handleLocationId = ({target}) => {
        const formElements = target.closest('form').elements

        console.log(formElements)

        const value = formElements['location'].value

        const locations = this.state.locations
        const locationIndex = locations.findIndex(location => location.id === parseInt(value))
        const {country, state, city} = locations[locationIndex];

        this.setState({locationId: value, country, state, city })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        e.persist()

        let {code, locationId} = this.state

        const airport = {
            code,
            locationId
        }

        const response = await airportsClient.save(airport)

        if (response.ok) {
            Router.push('/airports')
            return
        }

        const json = await response.json()
        const messages = json.errors

        console.log(`Messages ${JSON.stringify(messages)}`)

        const {codeErrors = [], globalErrors = []} = errorMapper.mapping(messages)

        this.setState({codeErrors, globalErrors})
    }

    render() {
        const {code, country, state, city, locations, selected} = this.state
        const {codeErrors} = this.state

        return (
            <Layout selected="airports">
                <form className="form center" onSubmit={this.handleSubmit}>
                    <Input id="code" onChange={this.handleChange("code")} value={code}
                           placeholder="Input airport code here..." label="Code" errors={codeErrors}/>

                    <Select id="location" onChange={this.handleLocationId} label="Location" items={formatLocations(locations)} selected={selected}/>

                    <Input id="country" value={country} placeholder="Input country code here..." label="Country"
                           disabled/>
                    <Input id="state" value={state} placeholder="Input state here..." label="State" disabled/>
                    <Input id="city" value={city} placeholder="Input city here..." label="City" disabled/>
                    <Button className="btn--block no-border large center" type="submit">Save</Button>
                </form>
            </Layout>
        );
    }

}


export default withAuth(AddForm)