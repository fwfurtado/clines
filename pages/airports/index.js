import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Table from "../../components/Table";
import withAuth from "../../components/hoc/WithAuth";
import * as rest from '../../lib/clients/airports.rest';
import Router from "next/router";

const headers = [
    "code",
    "country",
    "state",
    "city",
]
const viewAirport = (values) => {
    Router.push(`/airports/${values[0]}`)
}


const addAirports = () => {
    Router.push('/airports/add')
}

const Airports = ({airports=[]}) => (
    <Layout selected="airports">
        <div className="row">
            <h1>Airports</h1>
            <Button className="medium" onClick={() => addAirports()}>Add new Airports</Button>
        </div>
        <Table headers={headers} rows={airports} rowOnClick={(values) => viewAirport(values)}/>
    </Layout>
);


Airports.getInitialProps = async (ctx) => {
    const airports = await rest.list();

    return {airports: airports.map(flatAirport)}
}

const flatAirport = ({code, location}) => [
    code,
    `${location['country']}`,
    `${location['state']}`,
    `${location['city']}`,
]

export default withAuth(Airports);

