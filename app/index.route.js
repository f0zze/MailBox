import mainPageTemplate from './views/main-page.html';

export default function mainRouteConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url:'/mail',
            template: mainPageTemplate
        });

    $urlRouterProvider.otherwise('/');
}