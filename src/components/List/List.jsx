import React, { Component } from 'react'

export default class List extends Component {

    constructor(props) {
        super(props);

        setTimeout(() => {
            this.setState({
                list: [...this.state.list, 'Dnepr']
            }, () => {

                if (this.state.list.length === 5) {
                    this.setState({
                        colorUl: 'lightpink'
                    })
                }

            })
        }, 1000);



        setTimeout(() => {
            const colorList = this.state.list;
            colorList.sort();
            const colorLi = colorList.map((item) => ({ text: item, color: this.getRandomColor() }))
            this.setState({
                list: [...colorLi],
                colorUl: this.getRandomColor()

            },
                () => {

                    console.log(this.state.list);

                })
        }, 3000);
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    state = { ...this.props, }
    render() {
        const { list = [], colorUl, } = this.state;
        return list.length ? <ul style={{ backgroundColor: colorUl }}>
            {list.map((item, index) => <li key={index} style={{ backgroundColor: list[index].color || null }}>{item.text || item}</li>)}
        </ul > : null;
    }
}
