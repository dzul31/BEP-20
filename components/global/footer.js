import { Button, Card, Container, Grid, Link, Text } from "@nextui-org/react";
import BrandIcon from "../icons/BrandIcon";
import SvgIcon from "../icons/SvgIcon";

export default function Footer() {

    return (
        <>
        
        <Card css={{ br: 0}}>
            <Card.Body css={{ pt: 0 }}>
                <Container>
                    <Grid.Container gap={2} alignItems="center" justify="space-between">
                        <Grid>
                            Copyright &copy; 2022 MelonTracker | All Rights Reserved
                        </Grid>
                        <Grid>
                            <Text>
                                Want your token added? <a href="mailto:og.@gmail.com" rel="nofollow">Contact Me</a>
                            </Text>
                        </Grid>
                    </Grid.Container>
                   
                </Container>
            </Card.Body>
        </Card>
        </>
    )
}
