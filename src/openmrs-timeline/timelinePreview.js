import { RichText, MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const TimelinePreview = ({
	title,
	heading,
	description,
	linkText,
	linkUrl,
	timelineItems,
	isEdit = false,
	onChange = {},
	onSelectImage = () => {},
	onRemoveItem = () => {},
}) => (
	<section className="section_timeline21 color-scheme-1">
		<div className="padding-global">
			<div className="container-large">
				<div className="padding-section-large">
					<div className="timeline21_component">
						<div className="margin-bottom margin-xxlarge">
							<div className="max-width-large">
								<div className="margin-bottom margin-xsmall">
									<div className="tag is-orange">
										<div className="text-size-small text-color-tango">
											{isEdit && onChange.title ? (
												<RichText
													tagName="span"
													value={title}
													onChange={onChange.title}
													placeholder="Our history"
												/>
											) : (
												<RichText.Content value={title} tagName="span" />
											)}
										</div>
									</div>
								</div>
								<div className="margin-bottom margin-small">
									{isEdit && onChange.heading ? (
										<RichText
											tagName="h2"
											className="heading-style-h2"
											value={heading}
											onChange={onChange.heading}
											placeholder="Timeline heading"
										/>
									) : (
										<RichText.Content
											value={heading}
											tagName="h2"
											className="heading-style-h2"
										/>
									)}
								</div>
								{isEdit && onChange.description ? (
									<RichText
										tagName="p"
										className="text-size-medium"
										value={description}
										onChange={onChange.description}
										placeholder="Timeline description"
									/>
								) : (
									<RichText.Content
										value={description}
										tagName="p"
										className="text-size-medium"
									/>
								)}
								<div className="margin-top margin-medium">
									<div className="button-group">
										<a
											href={isEdit ? "#" : linkUrl}
											className="button is-link is-icon w-inline-block"
										>
											{isEdit && onChange.linkText ? (
												<RichText
													tagName="div"
													value={linkText}
													onChange={onChange.linkText}
													placeholder="Read more"
												/>
											) : (
												<RichText.Content value={linkText} tagName="div" />
											)}
											<div className="icon-embed-xxsmall w-embed">
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M6 3L11 8L6 13"
														stroke="CurrentColor"
														strokeWidth="1.5"
													></path>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>

						{timelineItems.length > 0 && (
							<div className="timeline21_content">
								<div className="timeline21_list">
									{timelineItems.map((item, index) => {
										const isEven = (index + 1) % 2 === 0;
										const imageControl = isEdit ? (
											<MediaUpload
												onSelect={(media) => onSelectImage(index, media.url)}
												allowedTypes={["image"]}
												render={({ open }) =>
													item.imageUrl ? (
														<div style={{ position: "relative" }}>
															<img
																loading="lazy"
																src={item.imageUrl}
																alt={item.date}
																className="timeline21_image"
																onClick={open}
																style={{ cursor: "pointer" }}
															/>
															<Button
																isSmall
																variant="secondary"
																onClick={() => onSelectImage(index, "")}
																style={{
																	position: "absolute",
																	top: 8,
																	right: 8,
																	zIndex: 2,
																}}
																aria-label="Remove image"
															>
																✕
															</Button>
														</div>
													) : (
														<div
															className="timeline21_placeholder-image"
															onClick={open}
															style={{ cursor: "pointer" }}
														>
															+ Select Image
														</div>
													)
												}
											/>
										) : item.imageUrl ? (
											<img
												loading="lazy"
												src={item.imageUrl}
												alt={item.date}
												className="timeline21_image"
											/>
										) : null;

										const removeButton =
											isEdit && timelineItems.length > 1 ? (
												<Button
													isSmall
													variant="tertiary"
													onClick={() => onRemoveItem(index)}
													style={{ marginBottom: 8 }}
													aria-label="Remove timeline item"
												>
													Remove
												</Button>
											) : null;

										const itemContent = (
											<>
												{removeButton}
												<div className="margin-bottom margin-xxsmall">
													<h3 className="heading-style-h6 text-color-tango">
														{isEdit && onChange.timelineItemDate ? (
															<RichText
																tagName="span"
																value={item.date}
																onChange={(value) =>
																	onChange.timelineItemDate(index, value)
																}
																placeholder="Date"
															/>
														) : (
															<RichText.Content
																value={item.date}
																tagName="span"
															/>
														)}
													</h3>
												</div>
												{isEdit && onChange.timelineItemDescription ? (
													<RichText
														tagName="p"
														value={item.description}
														onChange={(value) =>
															onChange.timelineItemDescription(index, value)
														}
														placeholder="Description"
													/>
												) : (
													<RichText.Content
														value={item.description}
														tagName="p"
													/>
												)}
											</>
										);

										return (
											<div className="timeline21_item" key={item.id}>
												{!isEven ? (
													<>
														<div className="timeline21_image-wrapper">
															{imageControl}
														</div>
														<div className="timeline21_progress-wrapper">
															<div className="timeline21_circle orange"></div>
															<div
																className={`timeline21_progress-line orange ${
																	index === timelineItems.length - 1
																		? "hide-mobile-landscape"
																		: ""
																}`}
															></div>
														</div>
														<div className="timeline21_item-content">
															{itemContent}
														</div>
													</>
												) : (
													<>
														<div className="timeline21_item-content">
															{itemContent}
														</div>
														<div className="timeline21_progress-wrapper">
															<div className="timeline21_circle orange"></div>
															<div
																className={`timeline21_progress-line orange ${
																	index === timelineItems.length - 1
																		? "hide-mobile-landscape"
																		: ""
																}`}
															></div>
														</div>
														<div className="timeline21_image-wrapper">
															{imageControl}
														</div>
													</>
												)}
											</div>
										);
									})}
								</div>
								{isEdit && (
									<div style={{ marginTop: "1rem" }}>
										<Button
											isPrimary
											variant="secondary"
											onClick={onChange.addTimelineItem}
										>
											Add Timeline Item
										</Button>
									</div>
								)}
								<div className="timeline21_fade-overlay-right"></div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default TimelinePreview;
