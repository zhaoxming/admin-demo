<template>
  <div class="">
    <h2>用户列表</h2>
    <Table border :columns="userCols" :data="userList"></Table>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                userCols: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
//                                h('Icon', {
//                                    props: {
//                                        type: 'person'
//                                    }
//                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '职位',
                        key: 'rolename'
                    },
                    {
                        title: '手机',
                        key: 'phone'
                    },
                    {
                        title: 'email',
                        key: 'email'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
//                                h('Button', {
//                                    props: {
//                                        type: 'primary',
//                                        size: 'small'
//                                    },
//                                    style: {
//                                        marginRight: '5px'
//                                    },
//                                    on: {
//                                        click: () => {
//                                            this.show(params.index)
//                                        }
//                                    }
//                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.delete(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                userList:[],
                userListSize:0

            }


        },

        methods: {

            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },

            userQuery:function () {
                let getUrl = SERVER_ROOT_URL+'/user/house_admin/all';
                this.$http.get(getUrl
                ).then(function (res) {
                    console.log(res);
                    if(res.body.status === 200){
                        this.userList= res.data.data.list;
                        this.userListSize = this.userList.length;
                        console.log(this.userList.length);
                        console.log(JSON.stringify(this.userList));

//                        alert(JSON.stringify(this.userList));
                        // alert(res.body.message);
                    }else{
                        alert("查询失败"+res.body.status)
                    }
                })
                    .catch(function (err) {
                        console.log(err)
                        console.log('错误')
                        alert(err.message)
                    })

            },

            delete:function (index) {
                let getUrl = SERVER_ROOT_URL+'/user/house_admin/delete_user?id='+this.userList[index].id;
                this.$http.get(getUrl
                ).then(function (res) {
                    console.log(res);
                    if(res.body.status === 200){
                        this.userList.splice(index, 1);
                    }else{
                        alert("查询失败"+res.body.status)
                    }
                })
                    .catch(function (err) {
                        console.log(err)
                        console.log('错误')
                        alert(err.message)
                    })

            }
        },


        created: function () {
            this.userQuery();
        },



    }
</script>

