module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'componetns': "@/components",
                'views': '@/views',
                'network':'@/network'
            }
        }
    }
}