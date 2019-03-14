import React from 'react'
import './home.scss'
import { configAxios } from '../../common/service';
import { message } from 'antd'
const echarts = require('echarts')

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pieDom: null,
            colors: ['#fe6c6c', '#27b5e5', '#52c090', '#5c9cf4', '#ffa54d']
        }
    }
    componentDidMount() {
        this.setState({
            pieDom: echarts.init(document.getElementById('pie-dom'))
        })
        this.renderPie()
    }
    async renderPie() {
        const _this = this;
        const piedata = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: []
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: []
                }
            ]
        };
        const params = {
            'type': 'getTodayRoadIllegal'
        }
        const res = await configAxios('index', params)
        if (res.errorCode !== 0) {
            message.error(res.message)
            return
        }
        let pieData = [];

        if (res.data.statistics && res.data.statistics.length > 0) {
            res.data.statistics.forEach((item, inx) => {
                item.name = item.illegalName;
                item.value = item.countTotal;
                // colors
                let index = inx % _this.state.colors.length;

                item.color = _this.state.colors[index];
                if (item.value !== 0) {
                    pieData.push(item);
                }
            });
        }
        piedata.series[0].data = res.data.statistics;
        _this.state.pieDom.setOption(piedata)
    }

    render() {

        return (
            <div>
                <div id="pie-dom" ></div>
            </div>
        )
    }
}


