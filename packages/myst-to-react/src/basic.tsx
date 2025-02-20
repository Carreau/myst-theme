import type * as spec from 'myst-spec';
import { HashLink } from './heading.js';
import type { NodeRenderer } from '@myst-theme/providers';
import classNames from 'classnames';
import { Tooltip } from './components/index.js';
import { MyST } from './MyST.js';

type TableExts = {
  rowspan?: number;
  colspan?: number;
};

type Delete = {
  type: 'delete';
};

type Underline = {
  type: 'underline';
};

type SmallCaps = {
  type: 'smallcaps';
};

type DefinitionList = {
  type: 'definitionList';
};

type DefinitionTerm = {
  type: 'definitionTerm';
};

type DefinitionDescription = {
  type: 'definitionDescription';
};

type CaptionNumber = {
  type: 'captionNumber';
  kind: string;
  identifier: string;
};

type BasicNodeRenderers = {
  text: NodeRenderer<spec.Text>;
  strong: NodeRenderer<spec.Strong>;
  emphasis: NodeRenderer<spec.Emphasis>;
  link: NodeRenderer<spec.Link>;
  paragraph: NodeRenderer<spec.Paragraph>;
  break: NodeRenderer<spec.Break>;
  inlineMath: NodeRenderer<spec.InlineMath>;
  math: NodeRenderer<spec.Math>;
  list: NodeRenderer<spec.List>;
  listItem: NodeRenderer<spec.ListItem & { checked?: boolean }>;
  container: NodeRenderer<spec.Container>;
  caption: NodeRenderer<spec.Caption>;
  blockquote: NodeRenderer<spec.Blockquote>;
  thematicBreak: NodeRenderer<spec.ThematicBreak>;
  subscript: NodeRenderer<spec.Subscript>;
  superscript: NodeRenderer<spec.Superscript>;
  abbreviation: NodeRenderer<spec.Abbreviation>;
  // Tables
  table: NodeRenderer<spec.Table>;
  tableRow: NodeRenderer<spec.TableRow>;
  tableCell: NodeRenderer<spec.TableCell & TableExts>;
  // Comment
  comment: NodeRenderer<spec.Comment>;
  mystComment: NodeRenderer<spec.Comment>;
  // Our additions
  captionNumber: NodeRenderer<CaptionNumber>;
  delete: NodeRenderer<Delete>;
  underline: NodeRenderer<Underline>;
  smallcaps: NodeRenderer<SmallCaps>;
  // definitions
  definitionList: NodeRenderer<DefinitionList>;
  definitionTerm: NodeRenderer<DefinitionTerm>;
  definitionDescription: NodeRenderer<DefinitionDescription>;
};

const BASIC_RENDERERS: BasicNodeRenderers = {
  text({ node }) {
    return <>{node.value}</>;
  },
  delete({ node }) {
    return (
      <del>
        <MyST ast={node.children} />
      </del>
    );
  },
  strong({ node }) {
    return (
      <strong>
        <MyST ast={node.children} />
      </strong>
    );
  },
  emphasis({ node }) {
    return (
      <em>
        <MyST ast={node.children} />
      </em>
    );
  },
  underline({ node }) {
    return (
      <span style={{ textDecoration: 'underline' }}>
        <MyST ast={node.children} />
      </span>
    );
  },
  smallcaps({ node }) {
    return (
      <span style={{ fontVariant: 'small-caps' }}>
        <MyST ast={node.children} />
      </span>
    );
  },
  link({ node }) {
    return (
      <a target="_blank" href={node.url} rel="noreferrer">
        <MyST ast={node.children} />
      </a>
    );
  },
  paragraph({ node }) {
    return (
      <p id={node.html_id}>
        <MyST ast={node.children} />
      </p>
    );
  },
  break() {
    return <br />;
  },
  inlineMath({ node }) {
    return <code>{node.value}</code>;
  },
  math({ node }) {
    return <code>{node.value}</code>;
  },
  list({ node }) {
    if (node.ordered) {
      return (
        <ol start={node.start || undefined} id={node.html_id}>
          <MyST ast={node.children} />
        </ol>
      );
    }
    return (
      <ul id={node.html_id}>
        <MyST ast={node.children} />
      </ul>
    );
  },
  listItem({ node }) {
    if (node.checked == null) {
      return (
        <li>
          <MyST ast={node.children} />
        </li>
      );
    }
    return (
      <li className="task-list-item">
        <input type="checkbox" className="task-list-item-checkbox" defaultChecked={node.checked} />
        <MyST ast={node.children} />
      </li>
    );
  },
  container({ node }) {
    return (
      <figure
        id={node.html_id || node.identifier || node.key}
        className={classNames(node.kind, node.class)}
      >
        <MyST ast={node.children} />
      </figure>
    );
  },
  caption({ node }) {
    return (
      <figcaption className="group">
        <MyST ast={node.children} />
      </figcaption>
    );
  },
  blockquote({ node }) {
    return (
      <blockquote id={node.html_id}>
        <MyST ast={node.children} />
      </blockquote>
    );
  },
  thematicBreak() {
    return <hr className="py-2 my-5 translate-y-2" />;
  },
  captionNumber({ node }) {
    const id = node.html_id || node.identifier || node.key;
    return (
      <HashLink
        id={id}
        kind={node.kind}
        className="mr-1 font-semibold text-inherit hover:text-inherit hover:font-semibold"
      >
        <MyST ast={node.children} />
      </HashLink>
    );
  },
  table({ node }) {
    // TODO: actually render the tbody on the server if it isn't included here.
    return (
      <table>
        <tbody>
          <MyST ast={node.children} />
        </tbody>
      </table>
    );
  },
  tableRow({ node }) {
    return (
      <tr>
        <MyST ast={node.children} />
      </tr>
    );
  },
  tableCell({ node }) {
    const ifGreaterThanOne = (num?: number) => (num === 1 ? undefined : num);
    const attrs = {
      rowSpan: ifGreaterThanOne(node.rowspan),
      colSpan: ifGreaterThanOne(node.colspan),
    };
    if (node.header)
      return (
        <th {...attrs}>
          <MyST ast={node.children} />
        </th>
      );
    return (
      <td {...attrs}>
        <MyST ast={node.children} />
      </td>
    );
  },
  subscript({ node }) {
    return (
      <sub>
        <MyST ast={node.children} />
      </sub>
    );
  },
  superscript({ node }) {
    return (
      <sup>
        <MyST ast={node.children} />
      </sup>
    );
  },
  abbreviation({ node }) {
    return (
      <Tooltip title={node.title}>
        <abbr aria-label={node.title} className="border-b border-dotted cursor-help">
          <MyST ast={node.children} />
        </abbr>
      </Tooltip>
    );
  },
  mystComment() {
    return null;
  },
  comment() {
    return null;
  },
  definitionList({ node }) {
    return (
      <dl className="my-5" id={node.html_id}>
        <MyST ast={node.children} />
      </dl>
    );
  },
  definitionTerm({ node }) {
    const allowedStrongTypes = new Set(['text', 'emphasis']);
    const makeStrong =
      node.children?.reduce((allowed, n) => allowed && allowedStrongTypes.has(n.type), true) ??
      false;
    return (
      <dt id={node.html_id}>
        {makeStrong ? (
          <strong>
            <MyST ast={node.children} />
          </strong>
        ) : (
          <MyST ast={node.children} />
        )}
      </dt>
    );
  },
  definitionDescription({ node }) {
    return (
      <dd>
        <MyST ast={node.children} />
      </dd>
    );
  },
};

export default BASIC_RENDERERS;
