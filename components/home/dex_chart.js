import { Card, Grid } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { useEffect } from "react"

export default function DexChart({ data }) {

    const { type } = useTheme();

    return(
        <Card shadow={true}>
            <Card.Body css={{ p: 0 }}>

            { data && 
                <iframe width="100%" height="750" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/${data && data.stats.pairAddress}?chainId=56&theme=dark&padding=16&chart=1&trades=1"></iframe>
            }
            </Card.Body>
        </Card>
    )
}
