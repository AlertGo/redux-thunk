import React from 'react' ;
import { connect } from 'react-redux'
import {getDiscuss,addFabulous} from './action'
class Discrss extends React.Component{
    componentDidMount (){
        console.log(this.props)
        this.props.getDiscuss()
    }
    addF (id,num){
        return ()=>{
          this.props.addFabulous(id,num)
        }
    }
    render (){
        return (
            <div>
                {
                    this.props.data.length > 0 && (
                        this.props.data.map((v,i) => {
                            return (
                                <div className="Dis_cont" key={i}>{/*! 评论框 包裹*/}
                                    <div className="Dis_usermsg">  {/*! 头像，用户名 */}
                                        <div className="Dis_userimg">
                                            <img src={v['img']} />
                                        </div>
                                        <div className="Dis_username">

                                            <p>{ v['nicename'] }</p>
                                            <p className="p2">2017-1-1 18:00</p>

                                        </div>
                                    </div>
                                    <div className="Dis_texts"> {/*! 评论详情 */}
                                        <div>
                                            { v['text'] }
                                        </div>
                                    </div>

                                    <div>{/*! 点赞*/}
                                          <button onClick={this.addF(v['id'],v['num'])}>点赞（{v['num']}）</button>
                                    </div>

                                </div>
                            )
                        })
                    )
                }
            </div>
        )
    }
}
let state = (data) => {
    return {
        data:data
    }
}
export default connect(state,{getDiscuss,addFabulous})(Discrss)
