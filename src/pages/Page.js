import React, { useState, useEffect } from 'react';
import sanitizeHtml from "sanitize-html";
import ContentEditable from 'react-contenteditable';

const Page = () => {
    const [content, setContent] = React.useState("");
	const onContentChange = React.useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p", "br"],
			allowedAttributes: { a: ["href"] }
		};

		setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
	}, [])

	return (
		<div className="container my-24 mx-auto md:px-6 bg-slate-300 rounded-3xl">
    		<section className="mb-32">
      			<div className="mx-auto max-w-[700px] md:px-3"></div>
				<ContentEditable
					onChange={onContentChange}
					onBlur={onContentChange}
					html={content} />
			</section>
		</div>
	)
}
export default Page;