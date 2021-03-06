﻿//      *********    DO NOT MODIFY THIS FILE     *********
//      This file is regenerated by a design tool. Making
//      changes to this file can cause errors.
namespace Expression.Blend.SampleData.SampleDataSource
{
	using System; 
	using System.ComponentModel;

// To significantly reduce the sample data footprint in your production application, you can set
// the DISABLE_SAMPLE_DATA conditional compilation constant and disable sample data at runtime.
#if DISABLE_SAMPLE_DATA
	internal class SampleDataSource { }
#else

	public class SampleDataSource : INotifyPropertyChanged
	{
		public event PropertyChangedEventHandler PropertyChanged;

		protected virtual void OnPropertyChanged(string propertyName)
		{
			if (this.PropertyChanged != null)
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}

		public SampleDataSource()
		{
			try
			{
				Uri resourceUri = new Uri("/VBlog.Screens;component/SampleData/SampleDataSource/SampleDataSource.xaml", UriKind.RelativeOrAbsolute);
				System.Windows.Application.LoadComponent(this, resourceUri);
			}
			catch
			{
			}
		}

		private ItemCollection _Collection = new ItemCollection();

		public ItemCollection Collection
		{
			get
			{
				return this._Collection;
			}
		}
	}

	public class ItemCollection : System.Collections.ObjectModel.ObservableCollection<Item>
	{ 
	}

	public class Item : INotifyPropertyChanged
	{
		public event PropertyChangedEventHandler PropertyChanged;

		protected virtual void OnPropertyChanged(string propertyName)
		{
			if (this.PropertyChanged != null)
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}

		private string _Date = string.Empty;

		public string Date
		{
			get
			{
				return this._Date;
			}

			set
			{
				if (this._Date != value)
				{
					this._Date = value;
					this.OnPropertyChanged("Date");
				}
			}
		}

		private string _Title = string.Empty;

		public string Title
		{
			get
			{
				return this._Title;
			}

			set
			{
				if (this._Title != value)
				{
					this._Title = value;
					this.OnPropertyChanged("Title");
				}
			}
		}

		private System.Windows.Media.ImageSource _Writer = null;

		public System.Windows.Media.ImageSource Writer
		{
			get
			{
				return this._Writer;
			}

			set
			{
				if (this._Writer != value)
				{
					this._Writer = value;
					this.OnPropertyChanged("Writer");
				}
			}
		}

		private string _Status = string.Empty;

		public string Status
		{
			get
			{
				return this._Status;
			}

			set
			{
				if (this._Status != value)
				{
					this._Status = value;
					this.OnPropertyChanged("Status");
				}
			}
		}

		private string _StatusColor = string.Empty;

		public string StatusColor
		{
			get
			{
				return this._StatusColor;
			}

			set
			{
				if (this._StatusColor != value)
				{
					this._StatusColor = value;
					this.OnPropertyChanged("StatusColor");
				}
			}
		}
	}
#endif
}
