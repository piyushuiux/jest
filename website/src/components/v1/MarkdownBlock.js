/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

const renderers = {a: Link};

/*
Handle this case:
<MarkdownBlock>
  <Translate>Markdown **content** with [links](https://facebook.com) can be translated</Translate>
</MarkdownBlock>
 */
function getMarkdown(children) {
  if (children?.type === Translate) {
    const {id, children: message} = children.props;
    return translate({id: id || message, message});
  } else {
    return children;
  }
}

export default function MarkdownBlock({children}) {
  const markdown = getMarkdown(children);
  return (
    <div>
      <span>
        <ReactMarkdown components={renderers}>{markdown}</ReactMarkdown>
      </span>
    </div>
  );
}
