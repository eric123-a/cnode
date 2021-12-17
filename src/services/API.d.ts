declare namespace API {
  export interface CommenRes {
    flag: number;
    data: any;
    msg: string;
  }
  export interface Topics {
    page: number;
    tab: string;
    limit: number;
    mdrender: string
  }
  export interface Topicsdetail {
    mdrender: string,
    accesstoken: string
  }
  export interface CreateTopre {
    success: boolean,
    topic_id: string
  }
  export interface CreateTop {
    accesstoken: string,
    title: string,
    tab: string,
    content: string
  }
  //编辑主题
  export interface UpdateTop {
    accesstoken: string,
    topic_id: string,
    title: string,
    tab: string,
    content: string
  }
  //主题收藏
  export interface Collectdata {
    accesstoken: string,
    topic_id: string
  }
  export interface CollectTop {
    'success': boolean
  }
  //取消主题
  export interface de_CollectTop {
    success: boolean
  }
  //评论
  export interface replies {
    accesstoken: string,
    content: string,
    reply_id?: string
  }
  export interface repliesre {
    success: boolean,
    reply_id: string
  }
  //点赞
  export interface ups {
    'success': boolean,
    'action': string
  }
  //验证access
  export interface accessToken {
    success: boolean, 
    loginname: string, 
    id: number, 
    avatar_url: string
  }
  //messawges
  export interface messages{
    has_read_messages: [],
    hasnot_read_messages: []
  }
  //mark_all
  export interface mark_all{
    success:boolean,
    marked_msgs:[]
  }
  //msg_one
  export interface mark_one{
    success:boolean,
    marked_msg_id:string
  }
}
