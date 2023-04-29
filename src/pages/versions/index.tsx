import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { Table } from "@site/src/shared/ui/table";

// @see https://github.com/facebook/docusaurus/blob/master/src/pages/versions.js (reference)
function Version() {
    const { siteConfig } = useDocusaurusContext();
    // TODO: implement later
    // const versions = useVersions();
    // const currentVersion = versions.find((version) => version.name === "current");
    // const pastVersions = versions.filter(
    //     (version) => version !== latestVersion && version.name !== "current",
    // );
    const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;

    return (
        <Layout
            // FIXME: [FSDCUR] Resolve types and OG metadata
            // @ts-ignore
            title="Versions"
            description="Feature-Sliced Design Versions page listing all documented site versions"
        >
            <main className="container margin-vert--lg">
                <h1>{translate({ id: "pages.versions.title" })}</h1>

                <div className="margin-bottom--lg">
                    <h3 id="next">Feature-Sliced Design v2.0.0 (Current)</h3>
                    <p>{translate({ id: "pages.versions.current" })}</p>
                    <Table>
                        <Table.Row
                            th="v2.0.0"
                            href={`${repoUrl}/releases/tag/v2.0.0`}
                            hrefTitle="Release Notes"
                        >
                            <td>
                                <Link to="/docs">Documentation</Link>
                            </td>
                            <td />
                        </Table.Row>
                        <Table.Row
                            th="v2.0-beta"
                            href={`${repoUrl}/releases/tag/v2.0-beta`}
                            hrefTitle="Release Notes"
                        >
                            <td>
                                <Link to="https://legacy-feature-sliced.netlify.app/docs/reference">
                                    Documentation
                                </Link>
                            </td>
                            <td>
                                <Link to="/docs/guides/migration/from-v1">Migration from v1</Link>
                            </td>
                        </Table.Row>
                    </Table>
                </div>

                <div className="margin-bottom--lg">
                    <h3 id="legacy">Feature Slices v1 (Legacy)</h3>
                    <p>{translate({ id: "pages.versions.legacy" }, { of: "feature-slices" })}</p>
                    <Table>
                        <Table.Row
                            th="v1.0"
                            href="https://featureslices.dev/v1.0.html"
                            hrefTitle="Documentation"
                        />
                        <Table.Row
                            th="v0.1"
                            href="https://featureslices.dev/v0.1.html"
                            hrefTitle="Documentation"
                        />
                    </Table>
                </div>
                <div className="margin-bottom--lg">
                    <h3 id="legacy">Feature Driven (Legacy)</h3>
                    <p>{translate({ id: "pages.versions.legacy" }, { of: "feature-driven" })}</p>
                    <Table>
                        <Table.Row
                            th="v0.1"
                            href="https://github.com/feature-sliced/documentation/tree/rc/feature-driven"
                            hrefTitle="Documentation"
                        />
                        <Table.Row
                            th="Example (kof)"
                            href="https://github.com/kof/feature-driven-architecture"
                            hrefTitle="Github"
                        />
                    </Table>
                </div>
            </main>
        </Layout>
    );
}

export default Version;
