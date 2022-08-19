import { Avatar, Dropdown, Button, Card, Grid, Text } from "@nextui-org/react";
import StatsLoader from "./home/stats/loader";
import TokenButton from "./home/token_button";
import SvgIcon from "./icons/SvgIcon";

const tokens  = require("../tokens");

export default function TokenList({ active, data, reloadHandler, isLoading }) {

    return (
        <Card shadow={true}>
            <Card.Body>
                <Dropdown>
                                <Dropdown.Button light>
                                    <Image src={`/img/tokens/${active}.png`} width={20} height={20}/>
                                </Dropdown.Button>
                                <Dropdown.Menu 
                                    selectionMode="single"
                                    aria-label="Static Actions" 
                                    onSelectionChange={(key) => changeToken(key)}>
                                {symbols.map((symbol, index) => {
                                    let token = tokens[symbol];

                                    return (
                                        <Dropdown.Item key={symbol}>
                                            <Grid.Container alignItems="center">
                                                <Grid css={{ mt: 5, mx: 10 }}>
                                                    <Image src={`/img/tokens/${symbol}.png`}
                                                        width={20} 
                                                        height={20} 
                                                        containerCss={{ d: "inline-block" }} /> 
                                                </Grid>
                                                <Grid>{token.title}</Grid>
                                            </Grid.Container>
                                        </Dropdown.Item>
                                    )

                                })}
                                </Dropdown.Menu>
                            </Dropdown>
                    <Grid>
                        <Button 
                            rounded 
                            color="success"
                            disabled={isLoading}
                            auto 
                            size={"sm"} 
                            onClick={() => reloadHandler()}>
                            <SvgIcon 
                                icon="repeat" 
                                size={15} 
                                stroke={2}/> 
                            <Text color="white" css={{ pl: 15}}>Refresh</Text>
                        </Button>
                    </Grid>
                </Grid.Container>
                
            </Card.Body>
            <StatsLoader data={data}/>
        </Card>)
}
