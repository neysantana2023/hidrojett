import { BiPhoneCall } from "react-icons/bi";

export const BtnLigueAgora: React.FC<{}> = () => {

    return (<div className="block-left block-left col-xs-12 col-sm-3 col-md-3 col-lg-3">

        <a href="tel:+5511937773016"
            id="btnLigarAgora"
            aria-label="Ligue"
            className="btn btn-primary margin-btn col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <b> <BiPhoneCall /> LIGUE AGORA </b>
        </a>
    </div>)
}