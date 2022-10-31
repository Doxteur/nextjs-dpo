import { Card, Grid, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import React, { use } from "react";
import { useEffect } from "react";

export default function ProjectCard({ filtered,list }) {
  
  const [listApp , setListApp] = React.useState(list);

  useEffect(() => {
    if(filtered == "all"){
      setListApp(list);
    }else{
      setListApp(list.filter((item) => item.type === filtered));
    }
  }, [filtered,list]);


  return (
    <Grid.Container gap={2} justify="flex-start">
      {listApp.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card className="scale-x-150" isPressable isHoverable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image src={"/aquaN2F.png"} alt={item.title} />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text
                  css={{
                    color: "$success",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                  }}
                >
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
