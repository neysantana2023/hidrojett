import { Button } from "react-bootstrap"
import { useRouter } from 'next/router'
import { BiMessageDetail } from "react-icons/bi"

const title: string = "ENVIE UMA MENSAGEM"

const BntFaleConosco: React.FC<{}> = () => {

    const useRoute = useRouter()

    const redirectHandler = () => {
        useRoute.push("/contato#myanchor")
    }

    return (<Button className="block-left btn-danger col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center" style={{ "padding": "2%" }} onClick={redirectHandler}>
        <BiMessageDetail /> {title}
    </Button>)
}

export const BntFaleConoscoMobile: React.FC<{}> = () => {

    const useRoute = useRouter()

    const redirectHandler = () => {
        useRoute.push("/contato#myanchor")
    }

    return (<Button className="btn-danger col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center" style={{ "padding": "9%" }} onClick={redirectHandler}>
        <BiMessageDetail /> {title}
    </Button>)
}

export default BntFaleConosco; 