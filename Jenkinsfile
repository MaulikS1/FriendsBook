pipeline{
    agent any
    tools {nodejs "NodeJS"}
    stages {
        stage("Install"){
            steps{
                sh "npm install"
            }
        }
        stage("Build"){
            steps{
                sh "npm run build"
            }
        }
        // stage("Deploy"){
        //     steps{
        //         sh "rm -rf /usr/local/var/www/angularapp/dist"
        //         sh "cp - R /Users/aakash/.jenkins/workspace/angnov/dist /usr/local/var/www/angularapp/dist"
        //     }
        // }
      
     post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
      }
      
    }
}
