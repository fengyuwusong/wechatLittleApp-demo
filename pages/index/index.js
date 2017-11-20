// pages/index/index.js
//只能用相对路径
var postsData = require('../../data/posts-data')
Page({
    /**
     * 页面的初始数据
     */
    data: {},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            postList: postsData.postList
        });
    },
    onPostTap: function (event) {
        const postId = event.currentTarget.dataset.postId;
        wx.navigateTo({
          url: 'post-detail/post-detail?id='+postId
        })
    }
})