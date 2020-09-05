import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import 'twin.macro';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="ja" />
        </Helmet>
        <div tw="flex justify-center">
          <div tw="container p-4">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
