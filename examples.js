const { developerId } = require('./data.js');


module.exports = {
    textHTML: `
<b>bold</b>, <strong>bold</strong>
<i>italic</i>, <em>italic</em>
<u>underline</u>, <ins>underline</ins>
<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
<span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
<a href="https://github.com/Phazerous">inline URL</a>
<a href="tg://user?id=${developerId}">inline mention of a user</a>
<code>inline fixed-width code</code>
<pre>pre-formatted fixed-width code block</pre>
<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
<pre><code class="language-python">
def getDigitSum(num):
    sum = 0

    for digit in str(num):
        sum += int(digit)

    return sum
</code></pre>
`,
    textMarkDownV2: `
*bold*
_italic_
__underline__
~strikethrough~
||spoiler||
[inline URL](https://github.com/Phazerous/)
[inline mention of a user](tg://user?id=${developerId})
\`inline fixed-width code\`
\`\`\`
pre-formatted fixed-width code block
\`\`\`

\`\`\`python
def getDigitSum(num):
    sum = 0

    for digit in str(num):
        sum += int(digit)

    return sum\`\`\`
`
}