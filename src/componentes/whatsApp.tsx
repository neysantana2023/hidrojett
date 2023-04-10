
import whatApp from "../assets/images/whatsapp.png"
import Image from "next/image"

export const BtnWhatsApp: React.FC<{}> = () => {

    return <div className="block-left col-xs-12 col-sm-3 col-md-3 col-lg-3" style={{ "margin": "2" }}>
        <a href="https://api.whatsapp.com/send?phone=5511910152082" aria-label="WhatsWapp"
            className="btn btn-success col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ "paddingTop": "15px", "paddingBottom": "15px" }}>
            <div style={{ "float": "left", "width": "20%" }}>
                <Image src={whatApp} alt="whats app" />
            </div>
            <div style={{ "float": "left", "textAlign": "left", "width": "80%", "fontSize": "13px" }}>
                <b>FAÇA SEU ORÇAMENTO AGORA MESMO</b>
            </div>
        </a>
    </div>
}

export const WhatsAppFlutuante: React.FC<{}> = () => {

    return (

        <a href="https://wa.me/5511910152082" style={{ "position": "fixed", "width": "72px", "height": "71px", "bottom": "30px", "right": "10px", "backgroundColor": "#25d366", "color": "#FFF", "borderRadius": "90px", "textAlign": "center", "fontSize": "40px", "boxShadow": "1px 1px 2px #888", "zIndex": "1000" }} rel="noreferrer" target="_blank">
            <i style={{ "marginTop": "16px" }} className="fa fa-whatsapp"></i>
        </a>

    )
}