import { request } from 'umi';

export async function gettopics(data:API.Topics) {
    return request('/api/topics', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        params:{
            page:data.page,
            tab:data.tab,
            limit:data.limit,
            mdrender:data.mdrender
        }
    })
}
export async function gettopicsId(id: string) {
    return request<API.Topicsdetail>('/api/topic/'+id, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
     
    })
}
//新建主题
export async function creattopics(data: API.CreateTop) {
    return request<API.CreateTopre>('/api/topics/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: data.accesstoken,
            title: data.title,
            tab: data.tab,
            content: data.content
        }
    })
}
//编辑主题
export async function updatetopics(data: API.UpdateTop) {
    return request<API.CreateTopre>('/api/topics/update', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: data.accesstoken,
            topic_id: data.topic_id,
            title: data.title,
            tab: data.tab,
            content: data.content
        }
    })
}
//主题收藏
export async function collecttopics(data: API.Collectdata) {
    return request<API.CollectTop>('/api/topic_collect/collect', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: data.accesstoken,
            topic_id: data.topic_id
        }
    })
}
//取消主题
export async function de_collect(data: API.Collectdata) {
    return request<API.de_CollectTop>('/api/topic_collect/collect', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: data.accesstoken,
            topic_id: data.topic_id
        }
    })
}
//用户收藏的主题
export async function usercollect(loginname: string) {
    return request<API.Topics>('/api/topic_collect/' + loginname, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },

    })
}
//评论
export async function createreplies(topic_id: string, data: API.replies) {
    return request<API.repliesre>('/api/topic/' + topic_id + '/replies', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: data.accesstoken,
            content: data.content,
           
        }
    })
}
//点赞
export async function ups(reply_id: string, data: string) {
    return request<API.ups>('/api/reply/' + reply_id + '/ups', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: data
        }
    })
}
//用户
export async function userdetail(loginname: string) {
    return request('/api/user/' + loginname, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },

    })
}
export async function accessToken(accessToken: string) {
    return request<API.accessToken>('/api/accesstoken', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: accessToken
        }
    })
}
//消息通知  
export async function count(accesstoken: string) {
    return request('/api/message/count?accesstoken=' + accesstoken, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },

    })
}
export async function messages(data: API.Topicsdetail) {
    return request<API.messages>('/api/messages?accesstoken=' + data.accesstoken + '&mdrender' + data.mdrender, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },

    })
}
//全部标记已读
export async function mark_all(accesstoken: string) {
    return request<API.mark_all>('/api/message/mark_all', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: accesstoken
        }
    })
}
//标记单个消息为已读
export async function mark_one(accesstoken: string) {
    return request<API.mark_one>('/api/message/mark_one?msg_id' + accesstoken, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        data: {
            accesstoken: accesstoken
        }
    })
}


