import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Banner from "./Common/Banner";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Container className="my-5">
        <p>
          Google Search Console gives you reports on how and when people see
          your site pop up in Google Search results. Note that it won't track
          people on your site like Google Analytics and Fathom do - just your
          performance in search. This is a useful litmus for your site's organic
          growth and authority. If you're investing in sharing your expertise
          and building a searchable site, your performance on Google Search
          Console should grow over time. In other words, you can see whether
          you're gaining traction via SEO or not. To get started, you'll need to
          register your site with the Google Search Console. Verifying your
          ownership takes a few quick steps, and doesn't require you to add
          Google Analytics. Best of all, it's free! Just register and follow
          instructions to add a DNS record, or upload a file to a specific place
          to verify that you own the site you're interested in monitoring. You
          should make sure to have a sitemap on your site - they're easy to
          generate, and worth the time to get right. This is what Google's
          crawlers primarily use to index your articles for search results. I
          use the Search Console to make decisions about things to write about
          next, and track the progress of my site over time. At the moment,
          Google will keeps 16 months of your site's traffic history around for
          you to analyze, but that history starts once you've registered you
          site with the Search Console. So, the sooner you get set up, the
          better!
        </p>
      </Container>
    </Fragment>
  );
};

export default Home;
