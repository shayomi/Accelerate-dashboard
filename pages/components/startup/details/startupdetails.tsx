import { GetServerSideProps } from "next";
import { StartupsList } from "@/shared/data/dashboards/startupsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Startup } from "@/types";
import StartupHighlight from "./startuphighlight";
import StartupDescription from "./startupdescription";
import React, { Fragment } from "react";
import Link from "next/link";

type Props = {
  startup: Startup;
};

const StartupDetails = ({ startup }: Props) => {
	return (
		<Fragment>
			<Seo title="Startup Management" />
			<Pageheader
				currentpage="Startups"
				activepage="Dashboards"
				mainpage="Startup Details"
			/>
			<div>
				<StartupHighlight startup={startup} />
			</div>
			<div className="mt-6">
				<StartupDescription startup={startup} />
			</div>

			<div className="flex justify-end mt-4 mb-8">
				<button className="bg-primary text-white rounded-md px-4 py-2">
					<Link href={`/startup/startups/edit/${startup.id}`}>
            Edit startup
					</Link>
				</button>
			</div>
		</Fragment>
	);
};

export const getServerSideProps: GetServerSideProps<Props> = async (
	context
) => {
	const { id } = context.params as { id: string };
	const startup = StartupsList.find((startup) => startup.id === id);

	if (!startup) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			startup,
		},
	};
};

export default StartupDetails;
