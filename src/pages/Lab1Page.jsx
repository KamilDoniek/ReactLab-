import FlexContainer from "../components/FlexContainerPersonal";
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

            <FlexContainer element={PersonInfo} data={data} ></FlexContainer>
        </>
    );
};
export default Lab1Page;