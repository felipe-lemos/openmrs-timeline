import { useBlockProps } from "@wordpress/block-editor";
import TimelinePreview from "./timelinePreview";

const Edit = ({ attributes, setAttributes }) => {
	const { title, heading, description, linkText, linkUrl, timelineItems } =
		attributes;

	const updateTimelineItem = (index, property, value) => {
		const newItems = [...timelineItems];
		newItems[index][property] = value;
		setAttributes({ timelineItems: newItems });
	};

	const addTimelineItem = () => {
		const newItems = [
			...timelineItems,
			{
				date: "New Date",
				description: "Information about this event",
				imageUrl: "",
				id: `item${Date.now()}`,
			},
		];
		setAttributes({ timelineItems: newItems });
	};

	const removeTimelineItem = (index) => {
		const newItems = [...timelineItems];
		newItems.splice(index, 1);
		setAttributes({ timelineItems: newItems });
	};

	const selectImage = (index, url) => {
		const newItems = [...timelineItems];
		newItems[index].imageUrl = url;
		setAttributes({ timelineItems: newItems });
	};

	return (
		<div {...useBlockProps()}>
			<TimelinePreview
				title={title}
				heading={heading}
				description={description}
				linkText={linkText}
				linkUrl={linkUrl}
				timelineItems={timelineItems}
				isEdit={true}
				onChange={{
					title: (value) => setAttributes({ title: value }),
					heading: (value) => setAttributes({ heading: value }),
					description: (value) => setAttributes({ description: value }),
					linkText: (value) => setAttributes({ linkText: value }),
					timelineItemDate: (index, value) =>
						updateTimelineItem(index, "date", value),
					timelineItemDescription: (index, value) =>
						updateTimelineItem(index, "description", value),
					addTimelineItem,
				}}
				onSelectImage={selectImage}
				onRemoveItem={removeTimelineItem}
			/>
		</div>
	);
};

export default Edit;
