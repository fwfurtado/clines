import Layout from "../../components/Layout";
import withAuth from "../../components/hoc/WithAuth";
import * as aircraftClient from '../../lib/clients/aircraft.rest';
import * as modelsClient from '../../lib/clients/aircraft-models.rest';
import {Input, Select} from "../../components/Input";
import {DarkButton as Button} from "../../components/Button";
import {Component} from "react";
import Router from "next/router";
import * as errorMapper from '../../lib/clients/error-mapping'


class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            model: "",
            models: props.models || [],
            globalErrors: [],
            codeError: [],
        }
    }

    static getInitialProps = async (ctx) => {
        const models = await modelsClient.list()

        return {models, selected: models[0].id}
    }

    handleChange = (name) => ({target}) => {
        const formElements = target.closest('form').elements

        const value = formElements[name].value

        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        e.persist()

        let aircraft = {
            code: this.state.code,
            modelId: parseInt(this.state.model),
        }

        const response = await aircraftClient.save(aircraft)

        if (response.ok) {
            Router.push('/aircraft')
            return
        }

        const json  = await response.json()
        const messages = json.errors

        const {codeErrors=[], globalErrors=[] } =  errorMapper.mapping(messages)

        this.setState({codeErrors, globalErrors})
    }

    render() {
        const {models, codeErrors, selected, code} = this.state

        return (

            <Layout selected="aircraft">
                <form className="form center" onSubmit={this.handleSubmit}>
                    <Input id="code" onChange={this.handleChange("code")} value={code} placeholder="Input aircraft code here..." label="Code" errors={codeErrors}/>
                    <Select id="model" onChange={this.handleChange("model")} label="Model" items={models} selected={selected}/>
                    <Button className="btn--block no-border large center" type="submit">Save</Button>
                </form>
            </Layout>
        );

    }
}

export default withAuth(AddForm)