import { Button, Card, Container, Grid, Link, Text } from "@nextui-org/react";
import BrandIcon from "../icons/BrandIcon";
import SvgIcon from "../icons/SvgIcon";

export default function Footer() {

    return (
        <>
    

   <div className="footer">
        
        
                <Container>
                    <Grid.Container gap={2} alignItems="center" justify="space-between">
                        <Grid>
<Text css={{ mb: '0', letterSpacing: .5 }} color="white">
                           
                            Copyright &copy; 2022 angelcrypt_ tracker | All Rights Reserved
</Text>
                        </Grid>
                        <Grid>
                            
<Text css={{ mb: '0', letterSpacing: .5 }} color="white">
                           
                                Want your token added? <a href="mailto:og.@gmail.com" rel="nofollow">Contact Me</a>
                            </Text>
                        </Grid>
                    </Grid.Container>
                   
                </Container>
            
     </div>
        </>
    )
}
