Page ({
    data: {
        message: 'hello'
    },
    onLoad () {
        this.setData({
            message: Date.now()
        })
    }
})
