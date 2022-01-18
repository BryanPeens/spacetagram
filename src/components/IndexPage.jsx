import { Page, Stack } from "@shopify/polaris";
import { ImageCard } from ".";

export default function IndexPage(props) {
    const { data, title, subtitle } = props;

    return (
        <Page
            title={title}
            subtitle={subtitle}>
            <Stack spacing="loose">
                {
                    data.map((element, index) => (
                        <ImageCard
                            key={index}
                            id={element.id}
                            imageSource={element.img_src}
                            earthDate={element.earth_date}
                            cameraName={element.camera.full_name}
                            roverName={element.rover.name} />
                        )
                    )
                }
            </Stack>
        </Page>
    );
}
