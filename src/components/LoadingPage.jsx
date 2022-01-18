import {
  SkeletonPage,
  Layout,
  Card,
  TextContainer,
  SkeletonBodyText,
  SkeletonDisplayText
} from "@shopify/polaris";

export default function LoadingPage() {
  return (
    <SkeletonPage primaryAction secondaryActions={2}>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <SkeletonBodyText />
          </Card>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </Card>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
}
