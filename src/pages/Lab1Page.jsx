import FlexContainerPersonal from "../components/FlexContainerPersonal";
import { data } from "../data/module-data";
import PersonInfo from "../components/PersonalInfo";

const Lab1Page = ({ names }) => {
    return (
        <>
            <h1>Laboratorium 1</h1>
            <h3>Lista imion</h3>
            {/* {names.map((o) => (
                <PersonalInfo key={o.id} {...o} />
            ))} */}

            <FlexContainerPersonal element={PersonInfo} data={data} ></FlexContainerPersonal>
        </>
    );
};
export default Lab1Page;