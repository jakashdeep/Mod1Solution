/**
 * Created by jakas on 2/4/2017.
 */
(function () {

    angular.module('LunchCheck',[])

        .controller('LunchCheckController',lunchcontrol);

        lunchcontrol.$inject=['$scope'];


        function lunchcontrol($scope){
        $scope.items="";
        $scope.message="";
        $scope.count="";
        $scope.styling="";




        $scope.check=function()
        {
            var arrayofitems = $scope.items.split(',');
            var NonZeroItem=0;

            for(var i=0;i<arrayofitems.length;i++)
            {
                if(arrayofitems[i]!=="" && arrayofitems[i]!==" ")
                {
                    NonZeroItem++;
                }
            }

            if($scope.items!="" && NonZeroItem!=0 && NonZeroItem<=3)
            {
                $scope.styling="Green";
                $scope.message="Enjoy!";

            }
            else if(NonZeroItem > 3)
            {
                $scope.styling="Green";
                $scope.message="Too much";

            }
            else
            {
                $scope.styling="Red";
                $scope.message="Please enter data first. Empty";

            }

            $scope.count=NonZeroItem;
        };

        $scope.stylechange=function()
        {
            return {color: $scope.styling}
        };

        }
}

)();