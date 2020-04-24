import Layout from "../../components/Layout";
import withAuth from "../../components/hoc/WithAuth";
import * as aircraftClient from '../../lib/clients/aircraft.rest';
import {Input} from "../../components/Input";

const ViewForm = ({code, model}) => (
    <Layout selected="aircraft">
        <div className="form center">
            <Input id="code" label="Code" value={code} disabled/>
            <Input id="model" label="Model" value={model.description} disabled/>
        </div>
    </Layout>
);


ViewForm.getInitialProps = async (ctx) => {
    const {code} = ctx.query
    const aircraft = await aircraftClient.show(code)

    return {...aircraft}
}




export default withAuth(ViewForm);