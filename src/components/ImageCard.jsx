import { React, useState, useEffect } from "react";
import { Card, TextContainer } from "@shopify/polaris";

export default function ImageCard(props) {
    const { id, imageSource, earthDate, cameraName, roverName } = props;
    const [like, setLike] = useState(localStorage.getItem(id) === 'true');

    const handleClick = () => {
        setLike(!like);
    }

    useEffect(() => {
        localStorage.setItem(id, like);
    }, [id, like]);

    return (
        <Card
            sectioned
            actions={[{
                content: like ? 'Unlike' : 'Like',
                onAction: () => handleClick()
            }]}>

            <img
                alt={`Mars rover ${roverName} image number ${id}`}
                width="370px"
                height="370px"
                src={imageSource}
            />

            <TextContainer>
                <p>Rover Name: {roverName}</p>
                <p>Camera Name: {cameraName}</p>
                <p>Earth Date: {earthDate}</p>
            </TextContainer>
        </Card>
    );
}