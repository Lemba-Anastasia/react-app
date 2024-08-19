import { FunctionComponent } from "react";
import { StyledPageContainer } from "./index.style";

interface Props {
    children: React.ReactNode;
}
const PageContainer: FunctionComponent<Props> = ({ children }) => {
    return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default PageContainer;