import { LineWave } from "react-loader-spinner";

export const ProcesingLoader = () => {
    return (
        <>
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(5px)',

                backgroundColor: 'rgb(0,0,0,0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '9999',
                color: 'white',
                fontSize: '25px'

            }}>

                loading...<LineWave color="red" middleLineColor="green" lastLineColor="green" />

            </div>
        </>
    )
}