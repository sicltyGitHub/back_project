import React, { Component } from 'react'
import { Button, Table, Modal, Form, Input, message } from 'antd';
import axios from 'axios';

class product extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="primary" onClick={this.onClickAdd}>添加商品</Button><br /><br />
                <br />
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.dataSource}
                    bordered
                    rowKey='id'
                    pagination={{
                        onChange: this.onChangePage,
                        total: this.state.total,
                        pageSize: this.state.page_size,
                        current: this.state.page,
                        showTotal: (total, range) => `共有 ${total}条, 当前显示的是${range[0]}-${range[1]}条 `
                    }}
                />
                {/* 对话框 */}
                <Modal
                    title={this.state.addKong === '' ? '添加商品' : '修改商品'}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {/* 表单 */}
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('product_name', {
                                rules: [{ required: true, message: '请输入商品名称!' }],
                            })(
                                <Input
                                    placeholder="请输入商品名称"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('product_price', {
                                rules: [
                                    { required: true, message: '请输入商品价格!' },
                                    { pattern: /^\d+(\.\d{1,2})?$/, message: '商品价格只能保留1~2位小数!' }
                                ],
                            })(
                                <Input
                                    placeholder="请输入商品名称"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('product_num', {
                                rules: [
                                    { required: true, message: '请输入商品价格!' },
                                    { pattern: /^\d+$/, message: '商品数量只能是正整数!' }
                                ],
                            })(
                                <Input
                                    placeholder="请输入商品数量"
                                />,
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }


    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            addKong: '',
            page_size: 2,
            dataSource: [],
            visible: false,
            columns: [
                {
                    title: '商品编号',
                    dataIndex: 'id',

                },
                {
                    title: '商品名称',
                    dataIndex: 'product_name',
                },
                {
                    title: '商品价格',
                    dataIndex: 'product_price',
                },
                {
                    title: '商品数量',
                    dataIndex: 'product_num',
                },
                {
                    title: '操作',
                    render: (text, record) => (
                        <div>
                            <Button onClick={() => { this.onClickEdit(record.id) }}>修改</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button type="danger" onClick={() => { this.onClickDele(record.id) }}>删除</Button>
                        </div>
                    ),
                },
            ],

        }
    }

    componentDidMount() {
        // 重新调用
        this.ShowTableList()
    }
    // 渲染数据
    ShowTableList = (page) => {
        // 调用接口
        axios.get(`/showproduct?page=${page || this.state.page}&page_size=${this.state.page_size}`).then(res => {
            // console.log(res);

            if (res.data.code === 200) {
                this.setState({
                    dataSource: res.data.data,
                    total: res.data.total
                })
            }
        })
    }
    // 触发页数改变页数
    onChangePage = (page) => {
        this.setState({
            page
        })
        this.ShowTableList(page)
    }

    // 显示对话框
    onClickAdd = () => {
        this.setState({
            visible: true,
            addKong: '',
        });
    };
    // 确认
    handleOk = e => {
        this.props.form.validateFields((err, values) => {
            // 所有验证都通过
            if (!err) {
                // 添加
                if (this.state.addKong === '') {
                    // 调用接口
                    axios.post(`/addproduct`, values).then(res => {
                        // console.log(res);
                        if (res.data.code === '200') {
                            message.success('添加成功')
                            // 清除校验
                            this.props.form.resetFields()
                            // 重新调用
                            this.ShowTableList()
                            // 弹框消失
                            this.setState({
                                visible: false,
                            });
                        }
                    })
                } else {
                    // 修改
                    axios.put(`/updateproduct?id=` + this.state.addKong, values).then(res => {
                        // console.log(res);

                        message.success('修改成功')
                        // 清除校验
                        this.props.form.resetFields()
                        // 重新调用
                        this.ShowTableList()
                        // 弹框消失
                        this.setState({
                            visible: false,
                        });
                    })
                }
            }
        });
    };
    // 取消
    handleCancel = e => {
        // 清除校验
        this.props.form.resetFields()
        this.setState({
            visible: false,
        });
    };

    // 删除
    onClickDele = (id) => {
        const _this = this
        Modal.confirm({
            title: '你确定要永久删除该数据吗?',
            content: '一但删除将不能恢复，请谨慎操作',
            onOk() {
                //   调用接口
                axios.delete(`/delproduct/${id}`).then(res => {
                    if (res.data.code === '200') {
                        message.success('删除成功')
                        // _this.setState({
                        //     page: _this.state.page - 1
                        // })
                        // // 重新调用
                        _this.ShowTableList(_this.state.page-1)
                    }

                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    // 回显数据
    onClickEdit = (id) => {
        this.setState({
            visible: true,
            addKong: id,
        });
        axios.get(`/updateproduct/${id}`).then(res => {
            if (res.data.code === '200') {
                this.props.form.setFieldsValue({
                    product_name: res.data.data[0].product_name,
                    product_price: res.data.data[0].product_price,
                    product_num: res.data.data[0].product_num
                })
            }
        })
    }
}
export default Form.create()(product)