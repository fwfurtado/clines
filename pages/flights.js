import Layout from "../components/Layout";
import Button from "../components/Button";
import Table from "../components/Table";
import withAuth from "../components/hoc/WithAuth";
import * as rest from '../lib/clients/flights.rest';

const headers = [
    "flight code",
    "aircraft",
    "departure",
    "arrival",
    "price"
]

const Flights = ({flights=[]}) => (
    <Layout selected="flights">
        <div className="row">
            <h1>Flights</h1>
            <Button className="medium">Add new Flight</Button>
        </div>
        <Table headers={headers} rows={flights}/>
    </Layout>
);


Flights.getInitialProps = async (ctx) => {
    const flights = await rest.list()

    return {flights: flights.map(Object.values) }
}


export default withAuth(Flights);

