import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Table from "../../components/Table";
import withAuth from "../../components/hoc/WithAuth";
import * as rest from '../../lib/clients/aircraft.rest';
import Router from "next/router";

const headers = [
    "code",
    "model",
]

const viewAircraft = (values) => {
    Router.push(`/aircraft/${values[0]}`)
}

const addAircraft = () => {
    Router.push('/aircraft/add')
}

const Aircraft = ({aircraft = []}) => (
    <Layout selected="aircraft">
        <div className="row">
            <h1>Aircraft</h1>
            <Button className="medium" onClick={() => addAircraft()}>Add new Aircraft</Button>
        </div>
        <Table headers={headers} rows={aircraft} rowOnClick={(values) => viewAircraft(values)}/>
    </Layout>
);


Aircraft.getInitialProps = async (ctx) => {

    const aircraft = await rest.list();

    return {aircraft: aircraft.map(aircraftMapper)}
}

const aircraftMapper = (aircraft) => {
    const {code, model} = aircraft;
    const {description} = model

    return [
        code,
        description,
    ]
}

export default withAuth(Aircraft);

