<template>
    <div class="header">
        <div class="title">
            <div class="icon"></div>
            <div class="showstate">
                <div class="showdb">database:  {{ database }}</div>
                <div class="showtable">table:  {{ table }}</div>
            </div>
        </div>
        <button class="link-button" @click="dialogVisible = true">连接数据库</button>
        <button class="logout" @click="logout()">退出登录</button>
        <el-dialog title="connect a database" :visible.sync="dialogVisible" width="30%">
            <el-input size="small" class="host info" placeholder="Host" v-model="info.host"></el-input>
            <el-input size="small" class="user info" placeholder="Username" v-model="info.user"></el-input>
            <el-input size="small" class="password info" placeholder="Password" show-password v-model="info.password">
            </el-input>
            <el-input size="small" class="database info" placeholder="Database Name" v-model="info.database"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">canncel</el-button>
                <el-button type="primary" @click="linkDataBase" :loading="this.connecting">connect</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import EventBus, { EventType } from '@/event'
import { mapActions, mapState } from 'vuex'
export default {
    name: 'MyHeader',
    data: function () {
        return {
            dialogVisible: false,
            info: {
                host: '',
                user: '',
                password: '',
                database: ''
            },
        }
    },
    computed: {
        ...mapState(['connecting', 'database', 'table'])
    },
    methods: {
        ...mapActions(['connect', 'loginExit']),
        async linkDataBase() {
            const res = await this.connect(this.info)
            if (res.success) {
                this.$message({ message: res.data.msg, type: 'success' })
                EventBus.$emit(EventType.connect, res.data.tables)
            }
            else {
                this.$message.error(res.data.msg)
            }
            this.dialogVisible = false
        },
        logout() {
            this.$alert('退出后不会保存当前状态', '是否确定退出登录？', {
                confirmButtonText: '确定',
                callback: () => {
                    this.$message({
                        type: 'info',
                        message: `退出登录`
                    });
                    this.loginExit()
                    this.$router.push('/login')
                }
            })
        }
    },

}
</script>

<style lang="scss">
.el-dialog__body {
    padding: 20px 20px;

    .info {
        width: 250px;
        display: block;
        margin: 15px auto;
    }

    .database {
        margin-bottom: 0px;
    }
}

.header {
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #dcdfe6;
    position: relative;

    .link-button {
        width: 100px;
        height: 40px;
        display: block;
        color: #fff;
        background-color: #409eff;
        border: 1px solid #dcdfe6;
        outline: none;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
        border-radius: 4px;
        position: absolute;
        top: 11px;
        right: 200px;
    }

    .logout {
        display: block;
        width: 100px;
        height: 40px;
        position: absolute;
        top: 11px;
        right: 40px;
        border: 1px solid #056de8;
        background-color: #fff;
        border-radius: 4px;
        color: #056de8;
        outline: none;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
    }

    .title {
        display: flex;
        width: 1000px;
        height: 100%;
        .showstate{
          flex-grow: 1;
          height: 100%;
          padding-left: 20px;
          font-size: 15px;
          font-weight: 500;
          .showdb{
            margin: 5px 0px;
          }
        }
        .icon{
            width: 400px;
            height: 100%;
        }
    }
}
</style>