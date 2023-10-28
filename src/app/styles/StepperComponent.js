import Check from "@mui/icons-material/Check";

import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import {styled} from "@mui/material/styles";

const QontoStepIconRoot = styled("div")(({theme, ownerState}) => ({
    color: "#eaeaf0",
    display: "flex",
    height: 40,
    alignItems: "center",
    ...(ownerState.active && {
        color: "#FB923C",
    }),
    "& .QontoStepIcon-completedIcon": {
        color: "#FB923C",
        zIndex: 1,
        fontSize: 20,
    },
    "& .QontoStepIcon-circle": {
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "currentColor",
    },
}));

export const QontoConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: "calc(-50% + 16px)",
        right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#FB923C",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#FB923C",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#eaeaf0",
        borderTopWidth: 4,
        borderRadius: 10,
    },
}));

export function QontoStepIcon(props) {
    const {active, completed, className} = props;
    
    return (
        <QontoStepIconRoot ownerState={{active}} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon"/>
            ) : (
                <div className="QontoStepIcon-circle"/>
            )}
        </QontoStepIconRoot>
    );
}