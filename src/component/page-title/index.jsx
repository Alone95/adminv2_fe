/*
* @Author: Rosen
* @Date:   2018-01-23 22:18:41
 * @Last Modified by: alone
 * @Last Modified time: 2018-05-05 15:29:52
*/
import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - MiMall 后台管理';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;