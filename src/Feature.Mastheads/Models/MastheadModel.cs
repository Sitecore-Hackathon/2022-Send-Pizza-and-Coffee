using System.Web;
using Constellation.Foundation.ModelMapping.FieldModels;

namespace Feature.Mastheads.Models
{
	public class MastheadModel
	{
		public HtmlString Heading { get; set; }

		public HtmlString Subheading { get; set; }

		public HtmlString IntroCopy { get; set; }

		public ImageModel FeaturedImage { get; set; }
	}
}
