import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function About(): JSX.Element {
  return (
    <Layout title="About" description="About Aayushi Code and its mission.">
      <main className="container" style={{ padding: '3rem 0 5rem' }}>
        <Heading as="h1">About Aayushi Code</Heading>

        <div style={{ marginBottom: '3rem' }}>
          <img
            src="img/editor-dark.png"
            alt="Aayushi Code Editor"
            style={{
              width: '100%',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(109, 139, 255, 0.3)',
              marginBottom: '2rem'
            }}
          />
        </div>

        <p>
          Aayushi Code is a fast, native code editor built in Rust with a
          GPU-accelerated renderer. It pairs the speed of a native application
          with the familiarity of a modern IDE, and stays out of your way.
        </p>

        <Heading as="h2">Why another editor?</Heading>
        <p>
          Most modern editors are built on web technologies and ship a lot of
          bundled framework with every window. That shows up as slower startup,
          higher memory use, and the occasional jank in a large file. Aayushi
          Code takes a different path: a native binary written in Rust,
          rendered on the GPU, with the editor core and language tooling
          designed for speed.
        </p>

        <Heading as="h2">What it is</Heading>
        <ul>
          <li>
            <strong>Native and fast.</strong> Written in Rust and rendered on
            the GPU. No Electron, no webviews.
          </li>
          <li>
            <strong>Feels like VS Code.</strong> The UI and default keybindings
            are tuned so you can switch without relearning your editor.
          </li>
          <li>
            <strong>No account, no telemetry.</strong> Nothing to sign in to
            and nothing phoning home.
          </li>
          <li>
            <strong>Open source.</strong> Released under the GPL-3.0 and
            Apache-2.0 licenses.
          </li>
        </ul>

        <Heading as="h2">What it isn't</Heading>
        <p>
          Aayushi Code intentionally skips built-in AI assistants and cloud
          tie-ins. Bring whichever agent or harness you already use — it plugs
          into a familiar editing experience instead of replacing it.
        </p>

        <Heading as="h2">Project status</Heading>
        <p>
          Aayushi Code is actively developed. Stable releases are built for
          macOS (Apple Silicon and Intel), Linux, Arch Linux, and Windows, and
          published on the{' '}
          <Link href="https://github.com/aayushpokhrel49/aayushii-code/releases">
            releases page
          </Link>
          .
        </p>

        <Heading as="h2">Get in touch</Heading>
        <p>
          Ideas, bug reports, and contributions are welcome. See the{' '}
          <Link href="/contact">Contact page</Link> for ways to reach the team.
        </p>
      </main>
    </Layout>
  );
}