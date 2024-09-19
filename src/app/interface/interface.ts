export interface IRibborBarData {
  ribbon_bar_data: ICompanyProfile;
}
export interface IHeader {
  header_data: {
    companyProfile: ICompanyProfile;
    headerItems: any;
  };
}

export interface IHeaderMenu {
  headerItems: IHeaderItem[];
}

export interface IHeaderItem {
  name: string;
  subMenu?: ICategoryData[];
  slug: string;
}
export interface ICategory {
  category_data: ICategoryData[];
}
export interface ICategoryData {
  name: string;
  slug: string;
  image_link: string;
  id: number;
}
export interface ICompanyProfile {
  company_name: string;
  company_email: string;
  company_phone: string;
  company_address: string;
  footer_text: string;
  introduction: string;
  vision: string;
  mission: string;
  map: string;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  logo_link: string;
  footer_logo_link: string;
  favicon_link: string;
  image_link: string;
}

export interface IButton {
  children: React.ReactNode;
}
export interface ISlider {
  data: ISliderData[];
}

interface ISliderData {
  id: number;
  title: string;
  image_link: string;
}

export interface IComponentHeader {
  data: {
    heading: string;
    subheading: string;
  };
}

export interface IBlogs {
  blog_data: IBlogData[];
}

export interface IBlogDetail {
  blog_detail: {
    detail: IBlogData;
    others: IBlogData[];
  };
}

interface IBlogData {
  title: string;
  slug: string;
  description: string;
  id: number;
  image_link: string;
  created_at: string;
}

export interface IGalleryList {
  gallery_list_data: IGalleryListData[];
}
export interface IGalleryCollection {
  galleryCollection: {
    images: IGalleryListData[];
  };
}
interface IGalleryListData {
  id: number;
  name: string;
  slug: string;
  image_link: string;
}

export interface IFooter {
  footer_data: {
    companyProfile: ICompanyProfile;
    category: ICategoryData[];
  };
}

export interface IAntdContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
