import Layout from "../../components/Layout";
import withAuth from "../../components/hoc/WithAuth";
import * as airportsClient from '../../lib/clients/airports.rest';
import Input from "../../components/Input";
import {DarkButton as Button} from "../../components/Button";
import Router from "next/router";

const ViewForm = ({code, location}) => (
    <Layout selected="airports">
        <div className="form center">
            <Input id="code" value={code} label="Code" disabled/>

            <Input id="country" value={location.country} label="Country" disabled/>
            <Input id="state" value={location.state} label="State" disabled/>
            <Input id="city" value={location.city} label="City" disabled/>
        </div>
    </Layout>
);


ViewForm.getInitialProps = async (ctx) => {
    const {code} = ctx.query

    const airport = await airportsClient.show(code)

    return {...airport}
}


export default withAuth(ViewForm);