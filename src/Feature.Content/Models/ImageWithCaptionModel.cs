﻿using Constellation.Foundation.ModelMapping.FieldModels;
using Sitecore.Data;
using System.Web;

namespace Feature.Content.Models
{
	public class ImageWithCaptionModel
	{
		public ID ID { get; set; }

		public HtmlString Heading { get; set; }

		public ImageModel FullSizeImage { get; set; }

		public HtmlString Caption { get; set; }

		public bool ViewFullSizeInModal { get; set; }
	}
}
