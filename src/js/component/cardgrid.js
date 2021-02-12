import React from "react";
import { SingleCard } from "./singlecard.js";
import peacockImage from "../../img/peacock-01.jpg";
import CapybaraImage from "../../img/capybara-001.jpg";
import LlamaImage from "../../img/llama002.jpg";
import GuacamayasImage from "../../img/guacamayas003.jpg";

//include images into your bundle

//create your first component
export function CardGrid() {
	return (
		<div className="card-deck">
			<SingleCard
				title="Peacock"
				image={peacockImage}
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				urlButton="https://duckduckgo.com/?t=canonical&q=peacock&atb=v164-1&iax=images&ia=images"
				labelButton="see more Peacock's"
			/>
			<SingleCard
				title="Capybara"
				image={CapybaraImage}
				description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
				urlButton="https://duckduckgo.com/?q=capybara&t=canonical&atb=v164-1&iar=images&iax=images&ia=images"
				labelButton="choose yours"
			/>
			<SingleCard
				title="Llama"
				image={LlamaImage}
				description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
				urlButton="https://duckduckgo.com/?q=llama&t=canonical&atb=v164-1&iar=images&iax=images&ia=images"
				labelButton="see more..."
			/>
			<SingleCard
				title="Guacamaya's"
				image={GuacamayasImage}
				description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
				urlButton="https://duckduckgo.com/?q=guacamaya&t=canonical&atb=v164-1&iar=images&iax=images&ia=images"
				labelButton="more Guacamaya's"
			/>
		</div>
	);
}
